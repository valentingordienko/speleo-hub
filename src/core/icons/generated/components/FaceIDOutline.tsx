import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FaceIDOutline.svg';

export function FaceIDOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FaceIDOutline">
      <SVG />
    </Icon>
  );
}
