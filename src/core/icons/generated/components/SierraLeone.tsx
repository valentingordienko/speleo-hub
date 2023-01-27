import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SierraLeone.svg';

export function SierraLeone(props: TBaseProps) {
  return (
    <Icon {...props} name="SierraLeone">
      <SVG />
    </Icon>
  );
}
