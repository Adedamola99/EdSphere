import Image from 'next/image'
import styles from './page.module.css';
import Project from '@/components/Project';
import Goals from '@/components/Goals';
import Chart from '@/components/Chart';
import Team from '@/components/Team';
import Progress from '@/components/Progress';
import Achievement from '@/components/Achievement';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome, Damia!</h1>
      <p>Here is your agenda for today</p>
      
      <div className="taskbar">
        <Project />
        <Chart />
        <Goals />
        <Progress />
        <Achievement />
        <Team />
      </div>
    </div>
  )
}