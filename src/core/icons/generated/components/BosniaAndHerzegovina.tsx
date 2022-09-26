import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BosniaAndHerzegovina.svg';

export function BosniaAndHerzegovina(props: TProps) {
  return (
    <Icon {...props} name="BosniaAndHerzegovina">
      <SVG />
    </Icon>
  );
}
