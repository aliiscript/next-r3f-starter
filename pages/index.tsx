import { useHelper } from 'drei'
import Head from 'next/head'
import React, { useRef, useState, useEffect } from 'react'
import Scene from '../components/Scene'
import '../styles/home.scss'
import CanvasLayout from '../components/CanvasLayout'
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import Layout from '../components/Layout'
// NOTE
// DatGUI missing styling so have to import it
// If using scss go to that file path and change the css extension to scss
// else leave as is
import 'react-dat-gui/dist/index.scss'

export default function Home() {
  // State
  const [params, setParams] = useState({
    color: "0xff0000",
    hoverColor: "0xff0000"
  })

  return (
    <>
      <Layout lessonName={"First"} lessonNum={0} chNum={1}>

        <CanvasLayout>
          <Scene color={params.color} hoverColor={params.hoverColor} />
        </CanvasLayout>

        <DatGui data={params} onUpdate={setParams}>
          <DatColor path="color" />
          <DatColor path="hoverColor" />
        </DatGui>

      </Layout >
    </>
  )
}
