"use client"

import "./loading.css";

import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import Card from "../Card";


export default function Chart() {

    const [loading, setLoading] = useState(1);


    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // top: '5%',
            // left: 'center'
            show: false
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 4,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                animationDelayUpdate: function (idx: any) {
                    return idx * 500;
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
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };

    useEffect(() => {
        setTimeout(() => {
            // axios.get('http://localhost:3333/dados-grafico').then((resp) => {
            //     console.log(resp);
            //     setLoading(0);
            // })
            setLoading(0);
        }, 2000)
    }, [])



    useEffect(() => {
        const handleResize = () => {
            setLoading(1);
            setTimeout(() => {
                setLoading(0);
            }, 500)
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);









    return (
        <>
            {loading ?
                <div className="h-56 loading" >
                    <p></p>
                    <p className="w-1/3"></p>
                </div>
                :
                <ReactEcharts style={{ height: '100%' }} option={option} />
            }
        </>)
}