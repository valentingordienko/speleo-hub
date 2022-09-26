import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SourceOutline.svg';

export function SourceOutline(props: TProps) {
  return (
    <Icon {...props} name="SourceOutline">
      <SVG />
    </Icon>
  );
}
