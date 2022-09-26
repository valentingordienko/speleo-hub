import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CreateTemplateSolid.svg';

export function CreateTemplateSolid(props: TProps) {
  return (
    <Icon {...props} name="CreateTemplateSolid">
      <SVG />
    </Icon>
  );
}
