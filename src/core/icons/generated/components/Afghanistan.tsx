import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Afghanistan.svg';

export function Afghanistan(props: TProps) {
  return (
    <Icon {...props} name="Afghanistan">
      <SVG />
    </Icon>
  );
}
