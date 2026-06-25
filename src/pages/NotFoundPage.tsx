import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Layout from '@/components/Layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout variant="default">
      <Helmet>
        <title>404 - HolaTiger</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">页面未找到</p>
        <Link
          to="/"
          className="inline-flex px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
