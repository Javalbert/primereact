import React = require("react");
import {Omit} from "../util";
import TooltipOptions from '../tooltip/TooltipOptions';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
    label?: string;
    icon?: string;
    iconPos?: string;
    cornerStyleClass?: string;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    [key: string]: any;
}

export class Button extends React.Component<ButtonProps,any> {}
