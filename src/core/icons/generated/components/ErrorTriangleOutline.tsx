import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ErrorTriangleOutline.svg';

export function ErrorTriangleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ErrorTriangleOutline">
      <SVG />
    </Icon>
  );
}
