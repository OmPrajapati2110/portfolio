import { NextRequest, NextResponse } from 'next/server';

const GITHUB_USERNAME = 'OmPrajapati2110';

export async function GET(req: NextRequest) {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'om-portfolio',
    };

    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=public`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const repos = await response.json();

    // Filter out forks, return clean data
    const cleaned = repos
      .filter((r: { fork: boolean }) => !r.fork)
      .map((r: {
        name: string;
        description: string | null;
        html_url: string;
        stargazers_count: number;
        forks_count: number;
        language: string | null;
        topics: string[];
      }) => ({
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        language: r.language,
        topics: r.topics || [],
      }));

    return NextResponse.json(cleaned);
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
