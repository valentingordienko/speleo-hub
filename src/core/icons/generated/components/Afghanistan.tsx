import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Afghanistan.svg';

export function Afghanistan(props: TBaseProps) {
  return (
    <Icon {...props} name="Afghanistan">
      <SVG />
    </Icon>
  );
}
