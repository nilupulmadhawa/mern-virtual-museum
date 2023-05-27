import React from 'react';
import BlogTable from './BlogTable';
import ArticleTable from './ArticleTable';

export default function BlogMainPage() {
  return (
    <div>
      <br />
      <BlogTable />
      <br />
      <ArticleTable />
    </div>
  );
}
