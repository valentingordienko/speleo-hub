import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MedalOutline.svg';

export function MedalOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MedalOutline">
      <SVG />
    </Icon>
  );
}
