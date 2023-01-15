/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { Layer as LayerType } from 'konva/lib/Layer';
import { Image } from 'konva/lib/shapes/Image';
import { Stage as StageType } from 'konva/lib/Stage';

import Konva from 'konva';
import useImage from 'use-image';

import colors from '../../utils/colors';
import PopOverStat from './PopoverStat';
import TopCountryCard from '../../components/TopCountryCard';
import BarChartWithoutAxis from '../../components/BarChartWithoutAxis';
import AreaChartWithoutAxis from '../../components/AreaChart';

import { getXCoordNum, getYCoordNum, points } from './helpers';
import { InvertedServiceCard } from '../../components/InvertedServiceCard';
import { CountrySalesActivityCard } from './components/CountrySalesActivityCard';



const Index = () => {
  const LayerRef = useRef<LayerType>(null);
  const stageRef = useRef<StageType>(null);
  const imageRef = useRef<Image>(null);
  const [image] = useImage('./images/land.svg', 'anonymous', 'origin');

  const createLine = useCallback(
    ({
      startX,
      startY,
      endX,
      endY,
      cX,
      cY,
      startColor,
      endColor,
    }: {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      cX: number;
      cY: number;
      startColor: string;
      endColor: string;
    }) => {
      const line = new Konva.Line({
        sceneFunc: (ctx, shape) => {
          ctx.beginPath();
          ctx.moveTo(getXCoordNum(startX), getYCoordNum(startY));
          ctx.quadraticCurveTo(
            getXCoordNum(cX),
            getYCoordNum(cY),
            getXCoordNum(endX),
            getYCoordNum(endY),
          );
          const gradient = ctx.createLinearGradient(
            getXCoordNum(startX),
            getYCoordNum(startY),
            getXCoordNum(endX),
            getYCoordNum(endY),
          );
          gradient.addColorStop(0, startColor);
          gradient.addColorStop(1, endColor);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.stroke();
        },
      });

      LayerRef?.current?.add(line);
    },
    [],
  );

  const createLineCap = useCallback(
    ({ x, y, color }: { x: number; y: number; color: string }) => {
      const circle = new Konva.Circle({
        x: getXCoordNum(x),
        y: getYCoordNum(y),
        radius: 4,
        fill: color,
      });


      LayerRef?.current?.add(circle);
    },
    [],
  );

  useEffect(() => {
    createLine({
      startX: points.first.x,
      startY: points.first.y,
      endX: points.second.x,
      endY: points.second.y,
      cX: 260,
      cY: 100,
      startColor: colors.red,
      endColor: colors.purple,
    });
    createLineCap({ x: points.first.x, y: points.first.y, color: colors.red });

    createLine({
      startX: points.second.x,
      startY: points.second.y,
      endX: points.third.x,
      endY: points.third.y,
      cX: 540,
      cY: 70,
      startColor: colors.purple,
      endColor: colors.yellow,
    });
    createLineCap({
      x: points.second.x,
      y: points.second.y,
      color: colors.purple,
    });

    createLine({
      startX: points.third.x,
      startY: points.third.y,
      endX: points.fourth.x,
      endY: points.fourth.y,
      cX: 540,
      cY: 150,
      startColor: colors.yellow,
      endColor: colors.green,
    });
    createLineCap({
      x: points.third.x,
      y: points.third.y,
      color: colors.yellow,
    });

    createLine({
      startX: points.fifth.x,
      startY: points.fifth.y,
      endX: points.fourth.x,
      endY: points.fourth.y,
      cX: 300,
      cY: 220,
      startColor: colors.black,
      endColor: colors.green,
    });
    createLineCap({
      x: points.fifth.x,
      y: points.fifth.y,
      color: colors.black,
    });

    createLine({
      startX: points.fourth.x,
      startY: points.fourth.y,
      endX: points.sixth.x,
      endY: points.sixth.y,
      cX: 550,
      cY: 220,
      startColor: colors.green,
      endColor: colors.cyan,
    });

    createLineCap({
      x: points.fourth.x,
      y: points.fourth.y,
      color: colors.green,
    });
    createLineCap({ x: points.sixth.x, y: points.sixth.y, color: colors.cyan });
  }, []);

  return (
    <>
      <Flex>
        <Box flexBasis='30%'>
          <Text variant='title'>Customers</Text>
          <Box mt={8}>
            <Text variant='xsmallLight'>Total Customers</Text>
            <Text variant='largeBold'>12,345,678</Text>
            <Box width='90%' mt={8}>
              <TopCountryCard hideChart />
            </Box>
            <Box width='90%' mt={4}>
              <CountrySalesActivityCard />
            </Box>
          </Box>
        </Box>
        <Box width='fit-content' position='relative'>
          <Stage
            ref={stageRef}
            width={window.innerWidth / 1.5}
            height={window.innerHeight / 1.5}
          >
            <Layer ref={LayerRef}>
              <KonvaImage
                image={image}
                width={window.innerWidth / 1.5}
                height={window.innerHeight / 1.5}
                ref={imageRef}
              />
            </Layer>
          </Stage>
          <PopOverStat
            bgColor={points.first.color}
            x={points.first.x}
            y={points.first.y}
          />
          <PopOverStat
            bgColor={points.second.color}
            x={points.second.x}
            y={points.second.y}
          />
          <PopOverStat
            bgColor={points.third.color}
            x={points.third.x}
            y={points.third.y}
          />
          <PopOverStat
            bgColor={points.fourth.color}
            x={points.fourth.x}
            y={points.fourth.y}
          />
          <PopOverStat
            bgColor={points.fifth.color}
            x={points.fifth.x}
            y={points.fifth.y}
          />
          <PopOverStat
            bgColor={points.sixth.color}
            x={points.sixth.x}
            y={points.sixth.y}
          />
          <Flex justifyContent='flex-end'>
            <Box mr={8}>
              <InvertedServiceCard
                title='Total Customers'
                chart={
                  <Box width='10vw' height='10vh'>
                    <AreaChartWithoutAxis />
                  </Box>
                }
              />
            </Box>

            <InvertedServiceCard
              title='Total Sales'
              chart={
                <Box width='10vw' height='10vh'>
                  <BarChartWithoutAxis />
                </Box>
              }
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
