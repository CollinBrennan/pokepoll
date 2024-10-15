'use client'
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

type Props = {
  data: {
    name: string
    fill: string
    votes: number
  }[]
}

export default function Chart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={data.length * 30}>
      <BarChart data={data} margin={{ right: 44 }} layout="vertical">
        <Bar dataKey="votes">
          <LabelList
            dataKey="votes"
            fill="white"
            position="right"
            formatter={(label: string) => label + '%'}
          />
        </Bar>
        <XAxis type="number" domain={[0, 100]} axisLine={false} tick={false} />
        <YAxis
          type="category"
          dataKey="name"
          axisLine={false}
          tickLine={false}
          width={96}
          style={{ fill: '#FFFFFF' }}
          className="capitalize"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
