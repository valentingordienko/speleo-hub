import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SourceOutline.svg';

export function SourceOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SourceOutline">
      <SVG />
    </Icon>
  );
}
