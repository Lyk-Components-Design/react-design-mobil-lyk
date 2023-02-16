console.log('button');

// import { ButtonPropsType } from './PropsType'; // 引入button类型

export interface ButtonProps {
	type?: 'primary' | 'warning' | 'ghost'; // 类型
	size?: 'large' | 'small'; // 尺寸
	disabled?: boolean; // 是否禁用
	loading?: boolean; // 是否有加载特效
	prefixCls?: string; // cls名
	className?: string;
	role?: string;
	inline?: boolean;
	// icon?: React.ReactNode;
	activeClassName?: string;
	// activeStyle?: boolean | React.CSSProperties;
	// style?: React.CSSProperties;
	// onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

// declare class Button extends React.Component<ButtonProps, any> {
// 	static defaultProps: {
// 		prefixCls: string;
// 		size: string;
// 		inline: boolean;
// 		disabled: boolean;
// 		loading: boolean;
// 		activeStyle: {};
// 	};
// 	render(): JSX.Element;
// }
// export default Button;

export default () => {
	console.log('button');
};
