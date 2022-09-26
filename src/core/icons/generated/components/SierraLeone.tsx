import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SierraLeone.svg';

export function SierraLeone(props: TProps) {
  return (
    <Icon {...props} name="SierraLeone">
      <SVG />
    </Icon>
  );
}
