
import MarkdownIt from 'markdown-it';
import frontMatterPlugin from 'markdown-it-front-matter';
import yaml from 'js-yaml';
import type { Project } from './schema';

// Import markdown files from public directory
const projectFiles = import.meta.glob('/projects/*.md', {
  as: 'raw',
  eager: true
});

function parseMarkdownToProject(filename: string, markdown: string): Project {
  let frontmatter: any = {};
  let contentStart = 0;

  // Extract frontmatter
  const md = new MarkdownIt().use(frontMatterPlugin, (fm: string) => {
    frontmatter = yaml.load(fm) || {};
  });

  // Parse to extract frontmatter
  md.render(markdown);

  // Find where content starts (after frontmatter)
  const fmMatch = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (fmMatch) {
    contentStart = fmMatch[0].length;
  }

  const content = markdown.substring(contentStart);

  // Parse markdown content into structured blocks
  const contentBlocks = parseMarkdownContent(content);

  return {
    id: frontmatter.id || filename.replace('.md', ''),
    title: frontmatter.title,
    tagline: frontmatter.tagline,
    tags: frontmatter.tags || [],
    media: frontmatter.media || [],
    content: contentBlocks,
    demoUrl: frontmatter.demoUrl,
    codeUrl: frontmatter.codeUrl,
  };
}

function parseMarkdownContent(markdown: string) {
  const blocks: any[] = [];
  const lines = markdown.trim().split('\n');

  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    // Headings
    if (line.startsWith('###')) {
      blocks.push({
        type: 'heading',
        level: 3,
        content: line.replace(/^###\s*/, ''),
      });
      i++;
    } else if (line.startsWith('##')) {
      blocks.push({
        type: 'heading',
        level: 2,
        content: line.replace(/^##\s*/, ''),
      });
      i++;
    } else if (line.startsWith('#')) {
      blocks.push({
        type: 'heading',
        level: 1,
        content: line.replace(/^#\s*/, ''),
      });
      i++;
    }
    // Blockquotes
    else if (line.startsWith('>')) {
      blocks.push({
        type: 'quote',
        content: line.replace(/^>\s*/, ''),
      });
      i++;
    }
    // Lists
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s*/, ''));
        i++;
      }
      blocks.push({
        type: 'list',
        content: listItems,
      });
    }
    // Paragraphs
    else if (line.length > 0) {
      let paragraph = line;
      i++;
      // Collect multi-line paragraphs
      while (i < lines.length && lines[i].trim().length > 0 &&
             !lines[i].trim().startsWith('#') &&
             !lines[i].trim().startsWith('>') &&
             !lines[i].trim().startsWith('-') &&
             !lines[i].trim().startsWith('*')) {
        paragraph += ' ' + lines[i].trim();
        i++;
      }
      blocks.push({
        type: 'paragraph',
        content: paragraph,
      });
    } else {
      i++;
    }
  }

  return blocks;
}

// Load all markdown files
const projects: Project[] = Object.entries(projectFiles).map(([path, content]) => {
  const filename = path.split('/').pop() || '';
  return parseMarkdownToProject(filename, content as string);
});

export const projectsContent = {
  title: "Side Projects",
  description: "Personal experiments in product, AI, and rapid prototyping",
  projects,
};
