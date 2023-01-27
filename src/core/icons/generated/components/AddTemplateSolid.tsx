import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AddTemplateSolid.svg';

export function AddTemplateSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AddTemplateSolid">
      <SVG />
    </Icon>
  );
}
