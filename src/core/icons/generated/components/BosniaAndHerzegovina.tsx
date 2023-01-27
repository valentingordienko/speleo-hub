import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BosniaAndHerzegovina.svg';

export function BosniaAndHerzegovina(props: TBaseProps) {
  return (
    <Icon {...props} name="BosniaAndHerzegovina">
      <SVG />
    </Icon>
  );
}
