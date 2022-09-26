import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MedalOutline.svg';

export function MedalOutline(props: TProps) {
  return (
    <Icon {...props} name="MedalOutline">
      <SVG />
    </Icon>
  );
}
