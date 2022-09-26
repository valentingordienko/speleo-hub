import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FaceIDOutline.svg';

export function FaceIDOutline(props: TProps) {
  return (
    <Icon {...props} name="FaceIDOutline">
      <SVG />
    </Icon>
  );
}
