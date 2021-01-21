import { useHelper } from 'drei'
import Head from 'next/head'
import React, { useRef, useState, useEffect } from 'react'
import Scene from '../components/Scene'
import '../styles/home.scss'
import CanvasLayout from '../components/CanvasLayout'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Layout lessonName={"First"} lessonNum={0} chNum={1}>

        <CanvasLayout
        >
          <Scene />
        </CanvasLayout>
      </Layout >
    </>
  )
}
