import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GlobeOutline.svg';

export function GlobeOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GlobeOutline">
      <SVG />
    </Icon>
  );
}
