import { ComponentType, lazy, Suspense } from 'react';
import {Box} from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box minHeight='100vh'>
        <p>Loading....</p>
    </Box>
  )
}

const loadable = (importFunc: {  (): Promise<{ default: ComponentType<any>; }>; }, fallback = <Loading/> ) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;