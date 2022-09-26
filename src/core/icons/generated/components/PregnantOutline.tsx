import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PregnantOutline.svg';

export function PregnantOutline(props: TProps) {
  return (
    <Icon {...props} name="PregnantOutline">
      <SVG />
    </Icon>
  );
}
