import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PauseOutline.svg';

export function PauseOutline(props: TProps) {
  return (
    <Icon {...props} name="PauseOutline">
      <SVG />
    </Icon>
  );
}
