import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PregnantOutline.svg';

export function PregnantOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PregnantOutline">
      <SVG />
    </Icon>
  );
}
