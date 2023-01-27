import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ErrorTriangleSolid.svg';

export function ErrorTriangleSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="ErrorTriangleSolid">
      <SVG />
    </Icon>
  );
}
