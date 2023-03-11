import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import * as dark from '../theme/dark.json'
import styled from '@emotion/styled'


const Div = styled.div`
  background-color: ${dark.secondary.value};
`


export default function Home() {
  return (
    <>
      <Div>
          안녕하세요
      </Div>
    </>
  )
}
