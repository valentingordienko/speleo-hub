import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ComponentTemplateSolid.svg';

export function ComponentTemplateSolid(props: TProps) {
  return (
    <Icon {...props} name="ComponentTemplateSolid">
      <SVG />
    </Icon>
  );
}
