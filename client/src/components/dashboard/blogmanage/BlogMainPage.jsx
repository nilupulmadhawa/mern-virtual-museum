import React from 'react';
import BlogTable from './BlogTable';
import ArticleTable from './ArticleTable';

export default function BlogMainPage() {
  return (
    <div>
      <h1>Blog Management</h1>
      <br />
      <BlogTable />
      <br />
      <ArticleTable />
    </div>
  );
}
