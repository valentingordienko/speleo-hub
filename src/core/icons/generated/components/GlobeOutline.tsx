import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GlobeOutline.svg';

export function GlobeOutline(props: TProps) {
  return (
    <Icon {...props} name="GlobeOutline">
      <SVG />
    </Icon>
  );
}
