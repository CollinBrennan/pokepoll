'use client'
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

export default function Chart({ data }: { data: any }) {
  return (
    <ResponsiveContainer width="100%" height={data.length * 40}>
      <BarChart data={data} barGap={0} layout="vertical">
        <Bar dataKey="votes">
          <LabelList dataKey="votes" position="right" fill="#FFFFFF" />
        </Bar>
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
