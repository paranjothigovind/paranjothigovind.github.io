import React, { useState } from 'react';
import { 
  Play, 
  Workflow, 
  RefreshCw
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  stageNumber: string;
  name: string;
  category: string;
  technologies: string[];
  role: string;
  latencyProfile: string;
  protocol: string;
  codeSnippet: string;
}

const pipelineNodes: ArchitectureNode[] = [
  {
    id: 'client',
    stageNumber: '01',
    name: 'Client Interface Tier',
    category: 'Frontend & Mobile',
    technologies: ['React 19', 'Next.js', 'React Native', 'TypeScript', '@vouch/library'],
    role: 'Renders high-fps interfaces, handles optimistic updates, manages local offline queues, and provides accessible component states.',
    latencyProfile: '< 16ms (60fps UI render)',
    protocol: 'HTTPS / WSS / TLS 1.3',
    codeSnippet: `// Type-safe Client Hook
const { mutate, data, isStreaming } = useRAGQuery({
  endpoint: '/api/v1/semantic-search',
  onTokenChunk: (delta) => appendStream(delta),
  groundingFilter: { tenantId: 'nyx-meditation-core' }
});`,
  },
  {
    id: 'gateway',
    stageNumber: '02',
    name: 'API Gateway & Routing',
    category: 'Backend & Security',
    technologies: ['FastAPI', 'Node.js', 'AWS Cognito', 'Pydantic', 'API Gateway'],
    role: 'Authenticates tokens, validates request contracts, enforces rate-limiting, and routes payloads to asynchronous worker nodes.',
    latencyProfile: '~ 25ms auth & validation',
    protocol: 'REST / Async FastAPI',
    codeSnippet: `@router.post("/query", response_model=QueryResponse)
async def handle_grounded_inquiry(
    payload: IngestionRequest,
    current_user: User = Depends(get_current_active_user)
) -> StreamingResponse:
    return await orchestrator.execute_stream(payload)`,
  },
  {
    id: 'ai-engine',
    stageNumber: '03',
    name: 'Applied AI & Orchestration',
    category: 'LangGraph & Azure OpenAI',
    technologies: ['LangGraph', 'Azure OpenAI GPT-4', 'LangChain', 'Text Embeddings'],
    role: 'Executes cyclic state graphs, coordinates document chunking, calculates vector cosine similarity, and synthesizes grounded answers with strict citation guardrails.',
    latencyProfile: 'Streaming (~350ms TTFT)',
    protocol: 'Async State Machine',
    codeSnippet: `class RAGState(TypedDict):
    query: str
    expanded_terms: List[str]
    retrieved_documents: List[Document]
    grounded_answer: Optional[str]
    citations: List[CitationToken]`,
  },
  {
    id: 'retrieval-data',
    stageNumber: '04',
    name: 'Knowledge & Vector Storage',
    category: 'Retrieval & Persistence',
    technologies: ['Azure AI Search', 'Vector DB', 'PostgreSQL', 'Amazon S3'],
    role: 'Maintains dense vector indices with hybrid BM25 scoring, preserves document schemas, stores audio stems, and enforces isolated multi-tenant namespaces.',
    latencyProfile: '~ 45ms hybrid search',
    protocol: 'HNSW Index + BM25',
    codeSnippet: `{
  "search": "vipassana mindful breathing protocols",
  "vectorQueries": [{ "kind": "vector", "k": 5, "fields": "contentVector" }],
  "queryType": "semantic",
  "semanticConfiguration": "meditation-semantic-config"
}`,
  },
];

export const ArchitectureViewer: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai-engine');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState<number | null>(null);

  const activeNode = pipelineNodes.find((n) => n.id === activeNodeId) || pipelineNodes[0];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);
    setActiveNodeId(pipelineNodes[0].id);

    const timeouts = [
      setTimeout(() => {
        setSimulationStep(1);
        setActiveNodeId(pipelineNodes[1].id);
      }, 700),
      setTimeout(() => {
        setSimulationStep(2);
        setActiveNodeId(pipelineNodes[2].id);
      }, 1500),
      setTimeout(() => {
        setSimulationStep(3);
        setActiveNodeId(pipelineNodes[3].id);
      }, 2300),
      setTimeout(() => {
        setSimulationStep(2); // Returning answer with citations
        setActiveNodeId(pipelineNodes[2].id);
      }, 3100),
      setTimeout(() => {
        setSimulationStep(0); // Delivered back to client
        setActiveNodeId(pipelineNodes[0].id);
      }, 3800),
      setTimeout(() => {
        setIsSimulating(false);
        setSimulationStep(null);
      }, 4500),
    ];

    return () => timeouts.forEach(clearTimeout);
  };

  return (
    <div className="relative rounded-2xl bg-[#0f1118]/90 border border-white/10 p-5 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden card-glow-hover">
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00]">
            <Workflow className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm sm:text-base text-white flex items-center gap-2">
              System Architecture & RAG Pipeline
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
                Live Interactive Map
              </span>
            </h4>
            <p className="text-xs text-neutral-400 font-mono">
              End-to-end data lifecycle from Client UI to Cloud Vector Knowledge
            </p>
          </div>
        </div>

        {/* Live Simulation Button */}
        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
            isSimulating
              ? 'bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/50'
              : 'bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 hover:border-[#ccff00]/40'
          }`}
        >
          {isSimulating ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#ccff00]" />
              <span>Simulating Packet Flow...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>Simulate Request Flow</span>
            </>
          )}
        </button>
      </div>

      {/* Pipeline Stages Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {pipelineNodes.map((node, index) => {
          const isActive = activeNodeId === node.id;
          const isPulseStep = simulationStep === index;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                isActive
                  ? 'bg-[#181c28] border-[#ccff00]/60 shadow-[0_0_20px_-8px_rgba(204,255,0,0.3)]'
                  : 'bg-[#12141c]/80 border-white/5 hover:border-white/20 hover:bg-[#151722]'
              } ${isPulseStep ? 'ring-2 ring-[#ccff00] ring-offset-2 ring-offset-black' : ''}`}
            >
              {/* Active neon highlight strip */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent" />
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-neutral-400 font-bold">
                  {node.stageNumber}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-neutral-400">
                  {node.protocol}
                </span>
              </div>

              <div className="font-semibold text-xs text-white group-hover:text-[#ccff00] mb-1">
                {node.name}
              </div>
              <div className="text-[11px] text-[#ccff00]/90 font-mono">
                {node.category}
              </div>

              {/* Status pulse */}
              {isPulseStep && (
                <div className="absolute bottom-1 right-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
                  <span className="text-[9px] font-mono text-[#ccff00]">ACTIVE</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
        {/* Left: Role & Architectural details */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono text-[#ccff00] uppercase tracking-wider font-semibold">
                Tier {activeNode.stageNumber} • {activeNode.category}
              </span>
            </div>
            <h5 className="font-display text-lg font-bold text-white mb-2">
              {activeNode.name}
            </h5>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {activeNode.role}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <p className="text-[11px] font-mono text-neutral-400 mb-1.5">Technologies In Production:</p>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-neutral-400 block">Latency Budget</span>
                <span className="text-xs font-mono font-medium text-emerald-400">
                  {activeNode.latencyProfile}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-neutral-400 block">Communication</span>
                <span className="text-xs font-mono font-medium text-neutral-200">
                  {activeNode.protocol}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Schema / Code Spec */}
        <div className="lg:col-span-6">
          <div className="rounded-xl bg-[#090b10] border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] font-mono text-neutral-400 ml-2">
                  contract_spec.{activeNode.id === 'ai-engine' || activeNode.id === 'gateway' ? 'py' : activeNode.id === 'retrieval-data' ? 'json' : 'tsx'}
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#ccff00] bg-[#ccff00]/10 px-1.5 py-0.5 rounded">
                Strict Contract
              </span>
            </div>
            <pre className="p-4 text-[11px] font-mono text-neutral-300 overflow-x-auto leading-relaxed max-h-56">
              <code>{activeNode.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
