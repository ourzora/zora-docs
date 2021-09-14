import React from 'react'
import './styles.css'
import GlslCanvas from 'glslCanvas'
import { ethers } from 'ethers'
import { ShaderFragment } from './ShaderFragment'

export const ShaderComponent = () => {
  const initCanvas = () => {
    const canvas = document.getElementById('f')
    var sandbox = new GlslCanvas(canvas)
    const rpcProvider = new ethers.providers.JsonRpcProvider(process.env.INFURA)
    rpcProvider.getBlockNumber().then((num) => {
      sandbox.load(ShaderFragment)
      sandbox.setUniform('u_seed', Math.pow(num, 0.5))
    })
    canvas.style.width = '100%'
    canvas.style.height = '100%'
  }
  window.addEventListener('load', () => initCanvas())

  return (
    <div>
      <canvas id="f" className="glslCanvas"></canvas>
    </div>
  )
}
