import { Card, Col, Row } from "antd";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./graphics.scss";

const data = {
  series: [150, 30],
  options: {
    chart: {
      width: 380,
      type: "pie",
    },
    fill: {
      type: "gradient",
    },
    labels: ["Windows 10", "Android"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
const d2 = {
  series: [
    {
      name: "Sesiones",
      data: [1, 4, 10, 5, 50, 62, 69, 91, 148, 0, 11, 4],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    // stroke: {
    //   curve: "straight",
    // },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "left",
    // },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#FDD835"],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
  },
};

const Graphics = () => {
  return (
    <div className="user-common-dashboard-scene-graphics">
      <Row gutter={[36, 36]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card
            title="Sesiones de todo el año 2020"
            className="user-common-dashboard-scene-graphics__card"
          >
            <ReactApexChart
              options={d2.options}
              series={d2.series}
              type="line"
              width="100%"
              height={350}
            />
          </Card>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Card
            title="Dispositivo más usado"
            className="user-common-dashboard-scene-graphics__card"
          >
            <ReactApexChart
              options={data.options}
              series={data.series}
              type="donut"
              width="100%"
              height={350}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Graphics;
