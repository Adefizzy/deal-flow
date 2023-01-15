import { useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Text, Image as KonvaImage } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { Layer as LayerType } from 'konva/lib/Layer';
import { Image } from 'konva/lib/shapes/Image';

const Index = () => {
  const stageRef = useRef<LayerType>(null);
  const imageRef = useRef<Image>(null);
  const [image] = useImage('./images/land.svg', 'anonymous', 'origin');

  useEffect(() => {
    var firstLine = new Konva.Shape({
      stroke: 'red',
      strokeWidth: 4,
      
      sceneFunc: (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(
          200,190
        );
       ctx.quadraticCurveTo(260,100,410,170);

        ctx.fillStrokeShape(shape);
      },
    });
    stageRef?.current?.add(firstLine);

    var secondLine = new Konva.Shape({
        stroke: 'red',
        strokeWidth: 4,
        sceneFunc: (ctx, shape) => {
          ctx.beginPath();
          ctx.moveTo(
            410,170
          );
         ctx.quadraticCurveTo(540,70,730,195);
  
          ctx.fillStrokeShape(shape);
        },
      });
      stageRef?.current?.add(secondLine);

      var thirdLine = new Konva.Shape({
        stroke: 'red',
        strokeWidth: 4,
        sceneFunc: (ctx, shape) => {
          ctx.beginPath();
          ctx.moveTo(
            730,195
          );
         ctx.quadraticCurveTo(540,150,445,295);
  
          ctx.fillStrokeShape(shape);
        },
      });
      stageRef?.current?.add(thirdLine);

      var fourthLine = new Konva.Shape({
        stroke: 'red',
        strokeWidth: 4,
        sceneFunc: (ctx, shape) => {
          ctx.beginPath();
          ctx.moveTo(
            235,350
          );
         ctx.quadraticCurveTo(300,220,445,295);
  
          ctx.fillStrokeShape(shape);
        },
      });
      stageRef?.current?.add(fourthLine);

      var fifthLine = new Konva.Shape({
        stroke: 'red',
        strokeWidth: 4,
        sceneFunc: (ctx, shape) => {
          ctx.beginPath();
          ctx.moveTo(
            445,295
          );
         ctx.quadraticCurveTo(550,220,660,305);
  
          ctx.fillStrokeShape(shape);
        },
      });
      stageRef?.current?.add(fifthLine);
  }, []);

  return (
    <Stage
      /* ref={stageRef} */ width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer ref={stageRef}>
        <KonvaImage
          image={image}
          width={window.innerWidth / 1.5}
          height={window.innerHeight / 1.5}
          ref={imageRef}
        />
      </Layer>
    </Stage>
  );
};

export default Index;
