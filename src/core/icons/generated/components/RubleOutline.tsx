import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RubleOutline.svg';

export function RubleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RubleOutline">
      <SVG />
    </Icon>
  );
}
