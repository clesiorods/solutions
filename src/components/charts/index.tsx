"use client"

import "./loading.css";

import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import Card from "../Card";
import { useTheme } from "next-themes";


export default function Chart() {

    const [loading, setLoading] = useState(1);
    const { theme } = useTheme();


    const option = {
        tooltip: {
            trigger: 'item'
        },
        backgroundColor: (theme === 'dark' ? '#10141f' : 'white'),
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: '10%',
            top: 10,
            bottom: 20
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                left: '-50%',
                radius: ['50%', '80%'],
                color: ['rgb(172 103 253)', 'rgb(119 33 202)', 'rgb(77 18 113)', 'rgb(52 10 77)'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 0,
                    borderColor: '#000',
                    borderWidth: 0
                },
                animationDelayUpdate: function (idx: any) {
                    return idx * 50;
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Alimentação' },
                    { value: 735, name: 'Transporte' },
                    { value: 484, name: 'Laser' },
                    { value: 300, name: 'Estudos' }
                ]
            }
        ]
    };

    const handleResize = () => {
        setLoading(1);
        setTimeout(() => {
            setLoading(0);
        }, 1000)
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [theme])


    return (
        <>
            {loading ?
                <div className="flex justify-center relative" >

                    <div className="loading_circle loading" >
                        <div className="bg-card-light dark:bg-card-soft-dark loading_circle_insert" ></div>
                    </div>

                    <div className="absolute right-[10%] top-3" >
                        <div className="flex">
                            <div className="loading legend"></div>
                            <div className="loading legend_text mt-1 ml-2"></div>
                        </div>
                        <div className="flex">
                            <div className="loading legend"></div>
                            <div className="loading legend_text mt-1 ml-2"></div>
                        </div>
                        <div className="flex">
                            <div className="loading legend"></div>
                            <div className="loading legend_text mt-1 ml-2"></div>
                        </div>
                        <div className="flex">
                            <div className="loading legend"></div>
                            <div className="loading legend_text mt-1 ml-2"></div>
                        </div>
                    </div>

                </div>
                :
                <ReactEcharts style={{ height: '100%' }} theme={theme} option={option} />
            }
        </>)
}