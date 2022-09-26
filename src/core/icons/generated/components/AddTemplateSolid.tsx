import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddTemplateSolid.svg';

export function AddTemplateSolid(props: TProps) {
  return (
    <Icon {...props} name="AddTemplateSolid">
      <SVG />
    </Icon>
  );
}
