import React from 'react';
import { marked } from 'marked';

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true
});

export default function MarkdownView({ content, className = '' }) {
  if (!content) return null;

  const html = marked.parse(content);

  return (
    <div 
      className={`prose-container ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
