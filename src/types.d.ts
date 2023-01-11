
type ICard = {
    styleProps?: StyleProps,
    propsWithChildren?: React.ReactNode
}

type ISingleTopCountry = {
    country: string;
    value: string;
    index: number;
    gain: boolean;
};

type ICardWithTitle = {
    children: React.ReactNode;
    title: string;
    leftTitle?: string;
    rightTitle?: string;
    noMarging?: boolean;
    height?: string
};

type IClickable = {
    onClick?: () => void;
    children: React.ReactNode;
    height?: string
};

type IProgressBar = {
   value: number, 
   color: string
}

type IEarningType = {
    type: string,
    index: number,
    value: string,
    progressValue: number
}