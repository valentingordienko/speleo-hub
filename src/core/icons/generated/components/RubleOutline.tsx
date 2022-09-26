import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RubleOutline.svg';

export function RubleOutline(props: TProps) {
  return (
    <Icon {...props} name="RubleOutline">
      <SVG />
    </Icon>
  );
}
