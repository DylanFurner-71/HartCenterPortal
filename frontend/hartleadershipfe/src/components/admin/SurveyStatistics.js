import React, { Component } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SurveyStatistics = ({data}) => {
        return ( 
            <div>
                <ResponsiveContainer width="95%" height={400}>
                <BarChart
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Average" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
            </div>
        );
}
 