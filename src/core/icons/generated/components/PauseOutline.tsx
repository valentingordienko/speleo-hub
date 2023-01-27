import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PauseOutline.svg';

export function PauseOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PauseOutline">
      <SVG />
    </Icon>
  );
}
