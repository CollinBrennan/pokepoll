'use client'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

type Props = {
  data: {
    name: string
    fill: string
    votes: number
  }[]
}

export default function Chart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={data.length * 40}>
      <BarChart data={data} layout="vertical">
        <Bar dataKey="votes" label={{ fill: 'white', position: 'right' }} />
        <XAxis type="number" axisLine={false} tick={false} />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          width={100}
          style={{ fill: '#FFFFFF' }}
          className="capitalize"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
