'use client';

import dynamic from 'next/dynamic';

const AskOmChatbot = dynamic(() => import('@/components/ui/AskOmChatbot'), {
  ssr: false,
});

export default function ChatbotLoader() {
  return <AskOmChatbot />;
}
