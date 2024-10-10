import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='mx-10'>
        <p className='italic font-mono text-lg mb-4'>
          秋天的阳光穿过树叶的缝隙，我知道那是太阳经过小孔成像倒在我身上的影，
        </p>
        <p className='italic font-mono text-lg mb-4'>
          我抬头望去只觉得一阵恍惚，看见了黄色短发的你，
        </p>
        <p className='italic font-mono text-lg'>
          我知道那是你穿过我的心留下的影，但我却不知道这是什么成像原理。
        </p>
      </div>
    </div>
  );
};

export default Home;
